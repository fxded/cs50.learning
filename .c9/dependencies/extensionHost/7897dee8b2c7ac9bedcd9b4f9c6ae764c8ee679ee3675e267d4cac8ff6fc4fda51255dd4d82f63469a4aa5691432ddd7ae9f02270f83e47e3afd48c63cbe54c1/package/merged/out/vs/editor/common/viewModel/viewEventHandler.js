/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(["require", "exports", "vs/base/common/lifecycle"], function (require, exports, lifecycle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ViewEventHandler extends lifecycle_1.Disposable {
        constructor() {
            super();
            this._shouldRender = true;
        }
        shouldRender() {
            return this._shouldRender;
        }
        forceShouldRender() {
            this._shouldRender = true;
        }
        setShouldRender() {
            this._shouldRender = true;
        }
        onDidRender() {
            this._shouldRender = false;
        }
        // --- begin event handlers
        onConfigurationChanged(e) {
            return false;
        }
        onCursorStateChanged(e) {
            return false;
        }
        onDecorationsChanged(e) {
            return false;
        }
        onFlushed(e) {
            return false;
        }
        onFocusChanged(e) {
            return false;
        }
        onLanguageConfigurationChanged(e) {
            return false;
        }
        onLineMappingChanged(e) {
            return false;
        }
        onLinesChanged(e) {
            return false;
        }
        onLinesDeleted(e) {
            return false;
        }
        onLinesInserted(e) {
            return false;
        }
        onRevealRangeRequest(e) {
            return false;
        }
        onScrollChanged(e) {
            return false;
        }
        onTokensChanged(e) {
            return false;
        }
        onTokensColorsChanged(e) {
            return false;
        }
        onZonesChanged(e) {
            return false;
        }
        onThemeChanged(e) {
            return false;
        }
        // --- end event handlers
        handleEvents(events) {
            let shouldRender = false;
            for (let i = 0, len = events.length; i < len; i++) {
                let e = events[i];
                switch (e.type) {
                    case 1 /* ViewConfigurationChanged */:
                        if (this.onConfigurationChanged(e)) {
                            shouldRender = true;
                        }
                        break;
                    case 2 /* ViewCursorStateChanged */:
                        if (this.onCursorStateChanged(e)) {
                            shouldRender = true;
                        }
                        break;
                    case 3 /* ViewDecorationsChanged */:
                        if (this.onDecorationsChanged(e)) {
                            shouldRender = true;
                        }
                        break;
                    case 4 /* ViewFlushed */:
                        if (this.onFlushed(e)) {
                            shouldRender = true;
                        }
                        break;
                    case 5 /* ViewFocusChanged */:
                        if (this.onFocusChanged(e)) {
                            shouldRender = true;
                        }
                        break;
                    case 16 /* ViewLanguageConfigurationChanged */:
                        if (this.onLanguageConfigurationChanged(e)) {
                            shouldRender = true;
                        }
                        break;
                    case 6 /* ViewLineMappingChanged */:
                        if (this.onLineMappingChanged(e)) {
                            shouldRender = true;
                        }
                        break;
                    case 7 /* ViewLinesChanged */:
                        if (this.onLinesChanged(e)) {
                            shouldRender = true;
                        }
                        break;
                    case 8 /* ViewLinesDeleted */:
                        if (this.onLinesDeleted(e)) {
                            shouldRender = true;
                        }
                        break;
                    case 9 /* ViewLinesInserted */:
                        if (this.onLinesInserted(e)) {
                            shouldRender = true;
                        }
                        break;
                    case 10 /* ViewRevealRangeRequest */:
                        if (this.onRevealRangeRequest(e)) {
                            shouldRender = true;
                        }
                        break;
                    case 11 /* ViewScrollChanged */:
                        if (this.onScrollChanged(e)) {
                            shouldRender = true;
                        }
                        break;
                    case 12 /* ViewTokensChanged */:
                        if (this.onTokensChanged(e)) {
                            shouldRender = true;
                        }
                        break;
                    case 13 /* ViewTokensColorsChanged */:
                        if (this.onTokensColorsChanged(e)) {
                            shouldRender = true;
                        }
                        break;
                    case 14 /* ViewZonesChanged */:
                        if (this.onZonesChanged(e)) {
                            shouldRender = true;
                        }
                        break;
                    case 15 /* ViewThemeChanged */:
                        if (this.onThemeChanged(e)) {
                            shouldRender = true;
                        }
                        break;
                    default:
                        console.info('View received unknown event: ');
                        console.info(e);
                }
            }
            if (shouldRender) {
                this._shouldRender = true;
            }
        }
    }
    exports.ViewEventHandler = ViewEventHandler;
});
//# sourceMappingURL=viewEventHandler.js.map