const input_str = document.querySelector('input')

const buttons = document.querySelectorAll('button')


let str = "";

let arr = Array.from(buttons)

arr.forEach(function(button) {
    // console.log(button)
    button.addEventListener('click', function(event){
        let t = true;
        // for(let i=0;i<str.length-1;i++)
        // {
        //     if((str[i]=='+'||str[i]=='-'||str[i]=='*'||str[i]=='/') &&  (str[i+1]=='+'||str[i+1]=='-'||str[i+1]=='*'||str[i+1]=='/'))
        //     {
        //         t = false;
        //         console.log(1);
        //     }
        // }
        // if( (event.target.innerHTML == '=') && (str.charAt(0) != '+' && str.charAt(0) !='-'&& str.charAt(0) !='/'&& str.charAt(0) !='*') && t==true)
        // {   
        //     str = "Invalid Format";
        //     input_str.value = str;
        // }
        if(event.target.innerHTML == '=')
        {
            str = eval(str);
            input_str.value = str;
        }
        else if(event.target.innerHTML == 'AC')
        {
            str = "";
            input_str.value = str;
        }
        else if(event.target.innerHTML == 'del')
        {
            str = str.slice(0,str.length-1);
            input_str.value = str;
        }
        else if(event.target.innerHTML == 'AC')
        {
            str = "";
            input_str.value = str;
        }
        // else if(event.target.innerHTML.charat(0) == '+'||'-'||'/'||'*')
        // {   
        //     str = 
        // }
        else
        {
            str = str + event.target.innerHTML;
            input_str.value = str;
        }


        
    })
    
})