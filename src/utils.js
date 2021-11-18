export const mascaraCep = (cep) => {
    return cep
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{3})\d+?$/, "$1")
}

export const mascaraCnpj = (cnpj) =>{
    return cnpj
    .replace(/\D/g,"")                           
    .replace(/^(\d{2})(\d)/,"$1.$2")             
    .replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") 
    .replace(/\.(\d{3})(\d)/,".$1/$2")           
    .replace(/(\d{4})(\d)/,"$1-$2") 
}

export const mascaraCpf = (cpf) => {
    return cpf
   .replace(/\D/g, '') 
   .replace(/(\d{3})(\d)/, '$1.$2') 
   .replace(/(\d{3})(\d)/, '$1.$2')
   .replace(/(\d{3})(\d{1,2})/, '$1-$2')
   .replace(/(-\d{2})\d+?$/, '$1') 

}

export const mascaraCel = (cell) => {
    return cell
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1")
}