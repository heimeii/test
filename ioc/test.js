let __instance;

class Single {
    constructor() {
        if (!__instance) {
            __instance = this.init();
        };
        return __instance;
    }

    init() {
        const privateMethod = function() {
            console.log("private fun");
        }
        const privateStr = "private str";

        return {
            getPrivateStr() {
                return privateStr;
            }
        };
    }
}

var singleA = new Single();
var singleB = new Single();

console.log(singleA === singleB);
