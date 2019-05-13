import store from "../redux/store/index";
import {DevHelper} from "../helpers/DevHelper";

const apiUrlPrefix = "https://test.minchotour.com/api/v2";

export const ApiResultType = {
    Ok: "OK",
    NotOk: "NotOK",
    Error: "Error",
    UnAuthorize: "UnAuthorize",
};

const getErrorMessage = (error) => {
    switch (error.message) {
        case "Network request failed":
            return "اتصال به اینترنت برقرار نیست";
        default:
            return "خطایی رخ داده است";
    }
};

const buildUrl = (url, parameters) => {
    let qs = "";
    for (const key in parameters) {
        const value = parameters[key];
        qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
    }
    if (qs.length > 0) {
        qs = qs.substring(0, qs.length - 1);
        url = url + "?" + qs;
    }
    return url;
};

export const Request = async ({url, get = false, post = false, method = "", formData = false, data = {}, header = {}, tokenRequired = true}) => {
    url = url.indexOf("http") < 0 ? (apiUrlPrefix + url) : url;

    let dataParams = {};

    if (get) {
        dataParams = {body: data};
    } else if (post) {
        dataParams = {body: JSON.stringify(data)}
    }

    if (tokenRequired) {
        let {token} = store.getState().user;
        header = {
            ...header,
            "Authorization": `Bearer ${token}`
        }
    }

    if (formData) {
        header = {
            ...header,
            'Content-Type': "multipart/form-data"
        }
    }

    const urlWithQs = get ? buildUrl(url, data) : url;
    const requestMethod = get ? "GET" : post ? "POST" : method;

    DevHelper.log("Request", urlWithQs, data, header, method);

    let response = null;
    try {
        response = await fetch(urlWithQs, {
            method: requestMethod,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...header,
            },
            ...dataParams,
        });

        const status = response.status;
        const statusIsOk = response.status >= 200 && response.status < 300;
        const json = (status === 204) ? {} : await response.json();

        const type = status === 401 ? ApiResultType.UnAuthorize : statusIsOk ? ApiResultType.Ok : ApiResultType.NotOk;
        const empty = response.status === 204 ? {empty: true} : {};
        const ok = statusIsOk ? {ok: true} : {};
        const notOk = statusIsOk ? {} : {notOk: true};
        const unAuthorize = status === 401 || status === 403 ? {unAuthorize: true} : {};

        const result = {
            _data: json,
            ...ok,
            ...notOk,
            ...empty,
            ...unAuthorize,
            type,
            status,
        };

        DevHelper.log("Response", urlWithQs, result.status, result.data);

        return result;

    } catch (e) {
        const errorResult = {
            message: getErrorMessage(e),
            type: ApiResultType.Error,
            error: true,
            dev: e,
            response,
        };
        DevHelper.log("Response ERROR", urlWithQs, errorResult);

        return errorResult;
    }
};


















