# Pasta de Imagens - Deportes24

Esta pasta contém todas as imagens utilizadas no site.

## Estrutura Recomendada

Você pode organizar as imagens em subpastas conforme necessário:

- `hero/` - Imagens do hero/banner principal
- `news/` - Miniaturas das notícias do sidebar
- `logos/` - Logos e marcas
- `stats/` - Imagens para seções de estatísticas
- `feature/` - Imagens da seção de destaque/feature

## Como Usar no Next.js

No Next.js, imagens na pasta `public` são acessadas diretamente pela URL:

```jsx
// Exemplo: se a imagem está em public/images/hero/banner.jpg
<img src="/images/hero/banner.jpg" alt="Banner" />
```

## Formatos Recomendados

- **Hero/Banner:** JPG ou WebP, resolução alta (1920x1080 ou superior)
- **Thumbnails:** JPG ou WebP, otimizado (400x300 ou similar)
- **Logos:** PNG com fundo transparente ou SVG
- **Ícones:** SVG ou PNG

## Otimização

Recomenda-se usar imagens otimizadas para web:
- Comprimir imagens antes de adicionar
- Usar formatos modernos (WebP) quando possível
- Manter tamanhos de arquivo razoáveis (< 500KB para banners, < 100KB para thumbnails)

