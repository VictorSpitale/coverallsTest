"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequest = void 0;
const defaults = require("superagent-defaults");
function getRequest(request, header = null) {
    const requestAgent = defaults(request);
    if (header)
        requestAgent.set(header);
    return requestAgent;
}
exports.getRequest = getRequest;
//# sourceMappingURL=superagent.js.map