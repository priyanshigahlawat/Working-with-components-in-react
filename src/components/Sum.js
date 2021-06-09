import Csc from './Csc';

function Sum(){
    function parentCallback(data){
        console.log(data);
    }
    return(
        <Csc getChildData = {parentCallback}></Csc>
    )
}
export default Sum;