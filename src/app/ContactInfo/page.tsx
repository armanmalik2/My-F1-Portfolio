'use client'
import React from 'react';
import { MessageCircle, Instagram, Twitter, Linkedin, Youtube, Send, Facebook, Phone, Github, Mail } from 'lucide-react';

import whatsapp from "../../../public/icons8-whatsapp-94.png";
import github from "../../../public/icons8-github-94.png";
import linkedin from "../../../public/icons8-linkedin-94.png";
import discord from "../../../public/icons8-discord-94.png";

const socialLinks = [
  {
    icon: MessageCircle,
    label: 'CHAT WITH ME',
    name: 'WHATSAPP',
    color: 'text-green-400',
    bgColor: 'bg-green-500',
    barColor: 'bg-green-500',
    href: 'https://wa.me/916395362560'
  },
  {
      icon: Mail,
    label: 'MAIL NOW',
    name: 'EMAIL',
    color: 'text-[#EA4335]',
    barColor: 'bg-gradient-to-r from-[#EA4335] to-[#FBB005]',
    bgColor: 'bg-[#DA4935]',
    href: 'mailto:armanmalik3370@gmail.com'
  },
  {
    icon: Phone,
    label: 'CALL ME',
    name: 'PHONE',
    color: 'text-teal-400',
    bgColor: 'bg-teal-500',
    barColor: 'bg-teal-500',
    href: 'tel:+916395362560'
  },
  {
      icon: Github,
      label: 'SEE MY PROJECTS',
      name: 'GITHUB',
      color: 'text-neutral-100',
      bgColor: 'bg-neutral-800',
      barColor: 'bg-neutral-700',
      href: 'https://github.com/armanmalik2'
    },
    {
      icon: Linkedin,
      label: 'CONNECT WITH ME',
      name: 'LINKEDIN',
      color: 'text-blue-300',
      bgColor: 'bg-blue-400',
      barColor: 'bg-blue-400',
      href: 'https://www.linkedin.com/in/arman-malik-a2359a265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      icon: Send,
      label: 'JOIN ME',
      name: 'DISCORD',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-700',
      barColor: 'bg-indigo-700',
      href: '#'
    },
    // {
    //   icon: Send,
    //   label: 'JOIN OUR CHANNEL',
    //   name: 'TELEGRAM',
    //   color: 'text-blue-400',
    //   bgColor: 'bg-blue-500',
    //   barColor: 'bg-blue-500',
    //   href: '#'
    // },
    {
      icon: Instagram,
      label: 'CONNECT WITH ME',
      name: 'INSTAGRAM',
      color: 'text-pink-400',
      bgColor: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400',
      barColor: 'bg-pink-500',
      href: 'https://www.instagram.com/armanmalik.222?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    {
      icon: Facebook,
      label: 'CONNECT ON FACEBOOK',
      name: 'FACEBOOK',
      color: 'text-blue-500',
      bgColor: 'bg-blue-600',
      barColor: 'bg-blue-600',
      href: 'https://www.facebook.com/arman.salim.malik'
    },
  ];

  const ContactInfo = () => {
    return (
      <div>
    <div className="scale-90 w-full bg-gradient-to-br from-slate-600 bg-n via-slate-800 to-slate-600 rounded-3xl p-8 md:p-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-400 tracking-wide">
        CONTACT ME ON SOCIAL MEDIA
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              className="group relative bg-gray-900/60 rounded-xl p-5 transition-all duration-300 hover:bg-gray-800/80 border border-gray-700/50 hover:border-gray-600"
            >
              <div className="flex flex-col space-y-3">
                <div className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
                  {social.label}
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className={`${social.bgColor} p-3 rounded-full shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <span className={`text-lg font-bold tracking-wide italic ${social.color} block`}>
                      {social.name}
                    </span>
                    <div className={`h-1.5 w-16 ${social.barColor} rounded-full mt-1.5 shadow-md`}></div>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  



      {/* <div className="flex items-center text-2xl border-4 bg-emerald-600 border-emerald-300 p-4 pt-1 pb-1 rounded-tl-3xl rounded-br-3xl"><img className="" src='https://img.icons8.com/?size=80&id=DUEq8l5qTqBE&format=png' />Whatsapp</div>
      <div><img src='https://img.icons8.com/?size=80&id=LoL4bFzqmAa0&format=png' />GitHub</div>
      <div><img src='https://img.icons8.com/?size=80&id=D2NqKl85S8Ye&format=png' />Discord</div>
      <div><img src='https://img.icons8.com/?size=80&id=MR3dZdlA53te&format=png' />LinkedIn</div> */}
    </div>
  )
}

export default ContactInfo;
