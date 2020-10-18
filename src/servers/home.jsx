import request from '../request';

export function getCard() {
    return request({
        url: 'card.json',
        method: 'GET'
    });
}

export function getBasicComponents(title) {
    return request({
        url: `basicComponents.json?${title}`,
        method: 'GET'
    });
}

export function getChangeLog() {
    return request({
        url: 'changeLog.json',
        method: 'GET'
    });
}