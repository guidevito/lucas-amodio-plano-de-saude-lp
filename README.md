# Dr. Lucas Amodio — Planos de Saúde

LP independente criada em 12/11/2026. HTML, CSS e JavaScript estáticos; sem dependências de build. A pasta `dist` pode ser publicada em qualquer hospedagem estática.

## Dados e fontes

- Foto original, nome, WhatsApp `5513997181600` e modalidades de atendimento recuperados de https://drlucasamodiofamilia.lovable.app/ em 12/11/2026.
- Foto original: `/__l5e/assets-v1/da01760c-1d9f-4bae-a4c4-2872b18708d0/lucas-amodio.png`. Apenas compressão JPEG; sem geração nem alteração de identidade.
- Referência temática e de progressão: https://juliocesarmoraes.adv.br/lp/problemas-plano-de-saude-sp/. Não foram copiados depoimentos, números, credenciais, textos ou imagens do outro profissional.
- Publicidade: https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021.
- Atendimento/negativas: https://agenciagov.ebc.com.br/noticias/202507/ans-tem-novas-regras-para-o-relacionamento-entre-operadoras-e-beneficiarios (comunicado via ANS).

## Configuração

Todos os 13 links de WhatsApp usam o número da LP existente e mensagens específicas em `dist/script.js`. Fallback sem JavaScript preserva o destino. Não existe envio automático, formulário ou coleta de documentação. O evento local `whatsapp_click` fica disponível em `dataLayer`; não há GTM, pixel ou tag de conversão instalado. Fontes hospedadas localmente.

`noindex, nofollow` preservado para a versão de apresentação. OAB/SP 407.335 fornecida pelo usuário em 12/11/2026 e incluída na página. Antes de iniciar anúncios: validar o conteúdo com o advogado, definir domínio e mensuração. A LP de Família não foi alterada.

## Verificação

Revisão visual local em 320, 390 e 1440 px. Sem overflow horizontal, ambas as ocorrências da foto carregadas, 13 URLs de WhatsApp com número e mensagens corretos. Abertura de FAQ e modal de privacidade validada. Nenhuma mensagem enviada durante os testes. Sem erros ou alertas de console registrados no navegador.


## Publicação no GitHub Pages

Repositório independente `guidevito/lucas-amodio-plano-de-saude-lp`. Arquivos estáticos na raiz da branch main. OAB/SP 407.335 fornecida pelo usuário em 12/11/2026. Mantido noindex por ser versão provisória. O domínio e a LP de Família não foram alterados.
