$(document).ready(function (){
    $("#enviarContato").click(function(){
        a = $('#formcontato-nome').val();
        b = $('#formcontato-telefone').val();
        c = $('#formcontato-email').val();
        f = $('#formcontato-mensagem').val();

        if(a == "" || b == "" || c == "" || f == ""){
            document.getElementById("msg-2").textContent = "Preencha todos os campos!"
            return true;
        }

        if(!validEmail(c)){
            document.getElementById("msg-2").textContent = "Email inválido!"
            return true;
        }

        else{
            document.getElementById("msg-2").textContent = "Aguarde.."
            document.getElementById("enviarContato").style.display = "none"
            $.ajax({
                method: "POST",
                url: "/santarita/sendmail.php",
                data: { 
                    sit: 2,
                    nome: a, 
                    telefone: b,
                    email: c,
                    mensagem: f
            }}).done(function(msg){
                document.getElementById("msg-2").textContent = msg
                document.getElementById("enviarContato").style.display = "inline-block"
            })
            .fail(function(jqXHR, textStatus, msg){
                alert(msg);
            });
        }
    });

    $("#contatoColegio").click(function(){
        a = $('#formcontato-colegio-nome').val();
        b = $('#telefone-colegio').val();
        c = $('#formcontato-colegio-email').val();
        f = $('#formcontato-colegio-mensagem').val();

        if(a == "" || b == "" || c == "" || f == ""){
            document.getElementById("msg-2").textContent = "Preencha todos os campos!"
            return true;
        }

        if(!validEmail(c)){
            document.getElementById("msg-2").textContent = "Email inválido!"
            return true;
        }

        else{
            document.getElementById("msg-2").textContent = "Aguarde.."
            document.getElementById("contatoColegio").style.display = "none"
            setTimeout(() => {
                document.getElementById("msg-2").textContent = "Email enviado! Muito obrigado pelo contato."
            }, 3000);
        }
    });

    $(".button-section-pages").click(function(){
        window.location.href = "../faculdades#formcurso-nome"
    });
});

function MenuAction(){
    if(window.screen.availWidth <= 1200){
       document.getElementById('hidden-menu').style.top ="0vh"
    } else {
        scroll(0,0)
    }
}

function closeMenu(){
    document.getElementById('hidden-menu').style.top = "350vh";
}

function validEmail(email){
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
}