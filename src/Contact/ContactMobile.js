import React from 'react';
import { FormspreeProvider } from '@formspree/react';
import Form from "./Form"

export default function ContactMobile() {
    return (
        <FormspreeProvider project="1592168122427637470">
                <Form />
         </FormspreeProvider>
    )
}
