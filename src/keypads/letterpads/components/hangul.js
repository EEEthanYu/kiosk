import * as Hangul from "hangul-js";

export function assemble(oldItems, newItem) {
    return Hangul.a(Hangul.d(oldItems).push(newItem));
}
