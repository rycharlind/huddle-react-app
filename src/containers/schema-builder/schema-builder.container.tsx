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
    const [schemaConfig, setSchemaConfig] = useState<SchemaConfig>({
        name: 'New Config',
        schemaFieldsMap: new Map<string, SchemaField>()
    })

    const handleChange = (event: React.ChangeEvent<{ name: string; value: string, id: string }>) => {
        const guid = event.target.id
        const schemaField = schemaConfig.schemaFieldsMap.get(guid)!

        if (event.target.name === 'fieldName') {
            schemaField.fieldName = event.target.value
        }

        if (event.target.name === 'fieldType') {
            schemaField.fieldType = event.target.value;
        }

        setSchemaConfig({
            name: schemaConfig.name,
            schemaFieldsMap: new Map(schemaConfig.schemaFieldsMap.set(guid, schemaField))
        })
    };

    const handleDelete = (guid: string) => {
        schemaConfig.schemaFieldsMap.delete(guid);
        setSchemaConfig({
            name: schemaConfig.name,
            schemaFieldsMap: new Map(schemaConfig.schemaFieldsMap)
        })
    }

    return (
        <div>
            <h3>Create Schema</h3>
            <Form style={{maxWidth: '600px', minWidth: '400px'}}>

                {
                    [...schemaConfig.schemaFieldsMap.keys()].map((key: string) => {
                        const field: SchemaField = schemaConfig.schemaFieldsMap.get(key)!
                        if (field) {
                            return (
                                <SchemaFieldComp
                                    key={field.fieldGuid}
                                    guid={field.fieldGuid}
                                    handler={handleChange}
                                    deleteHandler={handleDelete}
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

                        const schemaField: SchemaField = {
                            fieldGuid: guid,
                            fieldName: '',
                            fieldType: ''
                        }

                        setSchemaConfig({
                            name: schemaConfig.name,
                            schemaFieldsMap: new Map(schemaConfig.schemaFieldsMap.set(guid, schemaField))
                        })
                    }}
                    style={{width: '100%', marginTop: '16px'}}>Add Field</Button>

                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => {
                        console.log(schemaConfig)
                    }}
                    style={{width: '100%', marginTop: '16px'}}>Save</Button>

            </Form>
        </div>
    )
}

export default SchemaBuilderContainer;
