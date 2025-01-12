import MyButton from "../../components/myButton/MyButton";
import UserCard from "../../components/userCard/UserCard";

function Lesson03 () {
    return (
<div>
<h2>React Props 🧑‍🧑‍🧒</h2>
<UserCard name={'Harry'} age= {17} surname={' Potter'}/>
<UserCard name={'Anakin '} age= {26} surname={'Skywalker'}/>
<UserCard name={'Doctor'} age= {2000} surname={'Who?'}/>
</div>
    )
}


export default Lesson03;