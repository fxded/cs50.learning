/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class RestrictedRenderingContext {
        constructor(viewLayout, viewportData) {
            this._viewLayout = viewLayout;
            this.viewportData = viewportData;
            this.scrollWidth = this._viewLayout.getScrollWidth();
            this.scrollHeight = this._viewLayout.getScrollHeight();
            this.visibleRange = this.viewportData.visibleRange;
            this.bigNumbersDelta = this.viewportData.bigNumbersDelta;
            const vInfo = this._viewLayout.getCurrentViewport();
            this.scrollTop = vInfo.top;
            this.scrollLeft = vInfo.left;
            this.viewportWidth = vInfo.width;
            this.viewportHeight = vInfo.height;
        }
        getScrolledTopFromAbsoluteTop(absoluteTop) {
            return absoluteTop - this.scrollTop;
        }
        getVerticalOffsetForLineNumber(lineNumber) {
            return this._viewLayout.getVerticalOffsetForLineNumber(lineNumber);
        }
        getDecorationsInViewport() {
            return this.viewportData.getDecorationsInViewport();
        }
    }
    exports.RestrictedRenderingContext = RestrictedRenderingContext;
    class RenderingContext extends RestrictedRenderingContext {
        constructor(viewLayout, viewportData, viewLines) {
            super(viewLayout, viewportData);
            this._viewLines = viewLines;
        }
        linesVisibleRangesForRange(range, includeNewLines) {
            return this._viewLines.linesVisibleRangesForRange(range, includeNewLines);
        }
        visibleRangeForPosition(position) {
            return this._viewLines.visibleRangeForPosition(position);
        }
    }
    exports.RenderingContext = RenderingContext;
    class LineVisibleRanges {
        constructor(lineNumber, ranges) {
            this.lineNumber = lineNumber;
            this.ranges = ranges;
        }
    }
    exports.LineVisibleRanges = LineVisibleRanges;
    class HorizontalRange {
        constructor(left, width) {
            this.left = Math.round(left);
            this.width = Math.round(width);
        }
        toString() {
            return `[${this.left},${this.width}]`;
        }
    }
    exports.HorizontalRange = HorizontalRange;
});
//# sourceMappingURL=renderingContext.js.map