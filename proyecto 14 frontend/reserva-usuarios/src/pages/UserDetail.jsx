import { useContext} from "react";
import {UserContext} from "../pages/Usuarios"


function UserDetail(){
    const {SelectedUser}=useContext(UserContext);
    return(
        <div>
            <h1>detail</h1>
            <p><strong>Nombre</strong>{SelectedUser.nombre}</p>
        </div>
    )
}

export default UserDetail;
