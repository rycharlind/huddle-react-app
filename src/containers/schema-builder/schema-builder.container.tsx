import React, {useState} from 'react'
import Form from "react-bootstrap/Form";
import Button from "@material-ui/core/Button";
import SchemaFieldComp from "../../components/schema-builder/schema-field.comp";
import {v4 as uuidv4} from 'uuid';

interface SchemaConfig {
    name: string;
    schemaFieldsMap: Map<string, SchemaField>
}

interface SchemaField {
    fieldGuid: string;
    fieldName: string;
    fieldType: string;
}

const SchemaBuilderContainer = () => {
    const [schemaFieldsMap, setSchemaFieldsMap] = useState<Map<string, SchemaField>>(new Map())

    const handleChange = (event: React.ChangeEvent<{ name: string; value: string, id: string }>) => {
        const guid = event.target.id
        const schemaField = schemaFieldsMap.get(guid)!

        if (event.target.name === 'fieldName') {
            schemaField.fieldName = event.target.value
        }

        if (event.target.name === 'fieldType') {
            schemaField.fieldType = event.target.value;
        }

        setSchemaFieldsMap(new Map(schemaFieldsMap.set(guid, schemaField)));
    };

    return (
        <div>
            <h3>Create Schema</h3>
            <Form style={{maxWidth: '600px', minWidth: '400px'}}>

                {
                    [...schemaFieldsMap.keys()].map((key: string) => {
                        const field: SchemaField = schemaFieldsMap.get(key)!
                        if (field) {
                            return (
                                <SchemaFieldComp
                                    key={field.fieldGuid}
                                    guid={field.fieldGuid}
                                    handler={handleChange}
                                ></SchemaFieldComp>
                            )
                        } else {
                            return (<div>Missing Field Key</div>)
                        }
                    })
                }

                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => {
                        const guid = uuidv4()

                        const schemaRow: SchemaField = {
                            fieldGuid: guid,
                            fieldName: '',
                            fieldType: ''
                        }

                        setSchemaFieldsMap(new Map(schemaFieldsMap.set(guid, schemaRow)))
                    }}
                    style={{width: '100%', marginTop: '16px'}}>Add Field</Button>


                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => {
                        console.log(schemaFieldsMap)
                    }}
                    style={{width: '100%', marginTop: '16px'}}>Save</Button>

            </Form>
        </div>
    )
}

export default SchemaBuilderContainer;
