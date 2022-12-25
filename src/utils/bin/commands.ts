// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 

Welcome to my website!

During Christmas of 2022, I wanted to reconnect with my technical hobbies and here I am.  Stay tuned as I add more content. :)
  
More about me:
'sumfetch' - short summary.`;
};

export const blog = async (args: string[]): Promise<string> => {
  window.open(`${config.blog_url}`);
  return 'Opening blog...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// my apps
export const seedbox = async (args: string[]): Promise<string> => {
	window.open('https://app.f604.xyz');
	return 'Connecting to seedbox';
};


export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};


// Banner
export const banner = (args?: string[]): string => {
  return `
  █████▒     ██████    ▒███████▒     █████▒
▓██   ▒    ▒██    ▒    ▒ ▒ ▒ ▄▀░   ▓██   ▒ 
▒████ ░    ░ ▓██▄      ░ ▒ ▄▀▒░    ▒████ ░ 
░▓█▒  ░      ▒   ██▒     ▄▀▒   ░   ░▓█▒  ░ 
░▒█░       ▒██████▒▒   ▒███████▒   ░▒█░    
 ▒ ░       ▒ ▒▓▒ ▒ ░   ░▒▒ ▓░▒░▒    ▒ ░    
 ░         ░ ░▒  ░ ░   ░░▒ ▒ ░ ▒    ░      
 ░ ░       ░  ░  ░     ░ ░ ░ ░ ░    ░ ░    
                 ░       ░ ░               
                       ░                   
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'seedbox' to connect to seedbox or click <u><a class="text-light-blue dark:text-dark-blue underline" href="https://app.f604.xyz" target="_blank">here</a></u>.
Type 'blog' to read my blog or click <u><a class="text-light-blue dark:text-dark-blue underline" href="https://blog.f604.xyz" target="_blank">here</a></u>.
`;
};
