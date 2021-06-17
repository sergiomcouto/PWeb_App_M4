import { Admin, Resource } from "react-admin";
import lb4Provider from "react-admin-lb4";
import { ProdutoList, ProdutoEdit, ProdutoCreate  } from "./ProdutosList";
import { ArmazemCreate, ArmazemEdit, ArmazemList } from "./ArmazemList";
import ApartmentIcon from '@material-ui/icons/Apartment';
import ShopIcon from '@material-ui/icons/Shop';
import * as React from "react";


import Dashboard from "./dashboard";
import about from "./about";




const dataProvider = lb4Provider("http://localhost:3000");

const App = () => (
    <div>
        <Admin  dashboard={Dashboard} dataProvider={dataProvider}>
        
        <Resource name ="produtos/count"
             dashboard={Dashboard}

        />

        <Resource name="produtos" 
        icon={ShopIcon}
        list={ProdutoList} 
        edit={ProdutoEdit}
        create={ProdutoCreate} />

        <Resource name="armazens"  
        icon={ApartmentIcon}
        list={ArmazemList}  
        edit={ArmazemEdit}
        create={ArmazemCreate} />

        <Resource name="about" list={about} />

        

        </Admin>
 </div>
);

   



export default App;



