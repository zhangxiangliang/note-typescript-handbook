// 接口练习
interface LabelledValue { label: string };
function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);


// 可选属性
interface SquareConfig { color?: string; width?: number }
interface SquareResult { color: string; area: number; width?: number }

function createSquare(config: SquareConfig) : SquareResult {
    return {
        ...config,
        ...{color: "white", area: 100}
    };
}


// 只读属性
