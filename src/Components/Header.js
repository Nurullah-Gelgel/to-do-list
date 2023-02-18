import React from 'react';
import {useToDo} from "../Context/ToDoContext";
import validationSchema from "./validation";
import { Formik, Field, Form } from 'formik';
function Header(props) {
    const {addToDO} = useToDo()
    return (
        <div>
            <header className="header">
                <h1>todos</h1>
                <Formik
                    initialValues ={{
                        text:"",
                    }}
                    onSubmit={(values,bag)=> {
                        console.log(values)
                        addToDO(values.text)
                        bag.resetForm()
                }}

                validationSchema = {validationSchema}
                ><Form>
                        <Field className="new-todo" id="text" name="text" placeholder="What needs to be done?" autoFocus/>

                </Form>
                </Formik>
            </header>
        </div>
    );
}

export default Header;
