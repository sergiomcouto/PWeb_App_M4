import { SimpleList, SimpleForm, Create, List, Edit,  Datagrid, TextField, NumberField, DateField, ReferenceField, EditButton, 
    TextInput, DateTimeInput,  NumberInput, ReferenceInput,SelectInput, Filter} from "react-admin";

    import { useMediaQuery } from '@material-ui/core';


const PostTitle = ({record}) => {
    console.log(record);
    return<span>Produtos {record ? `${record.description}` : ''}</span>

}
    
const PostFilter = (props) => 
    <Filter {...props}>
        <TextInput label="Pesquisa por Descrição" source="description" alwaysOn />

        <ReferenceInput label="Armazem" source="Armazem_idArm" reference="armazens" allowEmpty>
            <SelectInput optionText="location" />
        </ReferenceInput>
    </Filter>



export const ProdutoList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    //console.log(props);
    return(
    <List filters={<PostFilter />} {...props}>
        {isSmall ? (
                <SimpleList
                    primaryText={record =>record.id}
                    secondaryText={record =>record.description}
                    tertiaryText={record => record.price} 
                    
                />
        ):

            (
        <Datagrid>
            <NumberField label="Cód.Artigo" source="id" />
            <TextField label="Descrição" source="description" />
            <DateField label="Data de Criação" source="date" showTime />
            <NumberField label="Preço" source= "price"/>
            <TextField label="Cor" source="color" />
            <NumberField label="Cod. Armazém" source="Armazem_idArm" />
            <ReferenceField label="Armazém" source="Armazem_idArm" reference="armazens">
                <TextField  source="location"/>
            </ReferenceField>
            <EditButton />
        </Datagrid>)}
    </List>

);
}



export const ProdutoEdit = props => (
    <Edit title={<PostTitle />}{...props}>
        <SimpleForm>
            <NumberField label="Cód.Artigo" source="id" />
            <TextInput label="Descrição" source="description" />
            <DateTimeInput label="Data de Criação" source="date"/>
            <TextInput label="Preço" source="price"/>
            <TextInput label="Cor" source="color" />
            <NumberInput label="Cod. Armazém" source="Armazem_idArm" />
        </SimpleForm>
    </Edit>
);


export const ProdutoCreate = props => (
    <Create  title={<PostTitle />}{...props}>
        <SimpleForm>
            <NumberField label="Cód.Artigo" source="id" />
            <TextInput label="Descrição" source="description" />
            <DateTimeInput label="Data de Criação" source="date"/>
            <TextInput label="Preço" source="price"/>
            <TextInput label="Cor" source="color" />
            <NumberInput label="Cod. Armazém" source="Armazem_idArm" />
            
        </SimpleForm>
    </Create>

);

