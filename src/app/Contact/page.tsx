'use client'

import { Mail, MessageCircle, MessageSquare, Phone, Send, ToolCase, User } from "lucide-react";
import { useState } from "react";
import { supabase } from "../../lib/supabase";
import Header from "../Header/page";
import ContactForm from "../ContactForm/page";
import ContactInfo from "../ContactInfo/page";


const Contact = () => {

    return(
        <div className="-mt-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <Header />
        <div className="scale-95 w-full h-fit  mt-0 mb-0 flex flex-wrap justify-evenly items-center pt-24 pb-10">
            <ContactInfo />
            <ContactForm />
            </div>
        </div>
    );
};

export default Contact;