const messages = {
principal:'Olá, Dr. Lucas. Vim pela página de planos de saúde e gostaria de orientação sobre o meu caso.',
contato:'Olá, gostaria de informações sobre o atendimento do Dr. Lucas para questões de plano de saúde.',
negativa:'Olá, Dr. Lucas. Meu plano de saúde negou um tratamento ou procedimento e gostaria de orientação.',
medicamentos:'Olá, Dr. Lucas. Gostaria de orientação sobre a recusa de medicamentos ou terapias pelo plano de saúde.',
reajuste:'Olá, Dr. Lucas. Gostaria de orientação sobre um reajuste na mensalidade do meu plano de saúde.',
cancelamento:'Olá, Dr. Lucas. Gostaria de orientação sobre o cancelamento do meu plano de saúde.',
homecare:'Olá, Dr. Lucas. Gostaria de orientação sobre cobertura de home care pelo plano de saúde.',
reembolso:'Olá, Dr. Lucas. Gostaria de orientação sobre demora na autorização ou reembolso do plano de saúde.',
urgencia:'Olá, Dr. Lucas. Tenho uma situação de plano de saúde com urgência médica e gostaria de informações sobre o atendimento.',
advogado:'Olá, Dr. Lucas. Vim pela página de planos de saúde e gostaria de conversar sobre o atendimento.',
duvida:'Olá, Dr. Lucas. Tenho uma dúvida sobre meu plano de saúde e gostaria de orientação.',
final:'Olá, Dr. Lucas. Vim pela página de planos de saúde e gostaria de apresentar minha situação.',
fixo:'Olá, Dr. Lucas. Vim pela página de planos de saúde e gostaria de orientação sobre o meu caso.'
};
document.querySelectorAll('[data-wa]').forEach(link => {
 link.href = 'https://wa.me/5513997181600?text=' + encodeURIComponent(messages[link.dataset.wa] || messages.principal);
 link.target = '_blank'; link.rel = 'noopener noreferrer';
 link.addEventListener('click',()=>{ window.dataLayer = window.dataLayer || []; window.dataLayer.push({event:'whatsapp_click',cta:link.dataset.wa,page_topic:'planos_de_saude'}); });
});
const privacy = document.querySelector('#privacy');
document.querySelector('.privacy-trigger').addEventListener('click',()=>privacy.showModal());
document.querySelector('.privacy-close').addEventListener('click',()=>privacy.close());
privacy.addEventListener('click',e=>{if(e.target===privacy)privacy.close();});
