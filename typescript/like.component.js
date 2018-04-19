"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_likeCount, _isSelected) {
        this._likeCount = _likeCount;
        this._isSelected = _isSelected;
    }
    Object.defineProperty(LikeComponent.prototype, "likeCount", {
        get: function () {
            return this._likeCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    LikeComponent.prototype.onClick = function () {
        this._likeCount += (this.isSelected) ? -1 : +1;
        this._isSelected = !this.isSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
