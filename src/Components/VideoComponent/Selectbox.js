
//import '../../index.js';
let C={
    value:15
}
const MyComponent = () => (      
    <div>
    <select value={C.value} name="selextbox" id="selectbox" style={{ background:"black",  color: "white"} }  height="100" width="100" onChange={e => C={value:e.target.value} }>
    <option value="15" fontSize="500">15s</option>
    <option value="30" fontSize="500">30s</option>
    <option value="45" fontSize="500">45s</option>
    <option value="60"fontSize="500">60s</option>
    <option value="90"fontSize="500">90s</option>
    <option value="120"fontSize="500">120s</option>
    <option value="-1"fontSize="500">15% of video</option>
    </select>
    </div>
)
    export function length(){
        console.log("Length of video ", C.value)
        return C.value;
    }
    export default MyComponent;