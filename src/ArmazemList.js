import { List,  Create, Edit, SimpleForm, TextInput, Datagrid, TextField, NumberField, EditButton, Filter, SimpleList} from "react-admin";
import { useMediaQuery } from '@material-ui/core';


const PostTitle = ({record}) => <span>Armazem {record ? `${record.name}` : ''}</span>

const PostFilter = (props) => 
    <Filter {...props}>
        <TextInput label="Pesquisa por Armazém" source="name" alwaysOn />
    </Filter>


export const ArmazemList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
     
    return (<div className="armazem">
        <List filters={<PostFilter />}  {...props}>
        {isSmall ? (
                <SimpleList
                    primaryText={record =>record.id}
                    secondaryText={record =>record.name}
                    tertiaryText={record => record.location} 
                />
        ):

            (<Datagrid>
                <NumberField label="Cód. Armazém" source="id" />
                <TextField label="Armazém" source="name" />
                <TextField label="Localização" source="location" />
                <EditButton />
            </Datagrid>)}
            
        </List>
    </div>)


} 
   

export const ArmazemEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="name" />
            <TextInput source="location" />
        </SimpleForm>
    </Edit>
);


export const ArmazemCreate = props => (
    <Create title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="name" />
            <TextInput source="location" />
        </SimpleForm>
    </Create>
);