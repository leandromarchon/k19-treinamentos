<?php for($i = 0; $i < 3; $i++): ?>

<!-- article -->
<article>
    <!-- header -->
    <header>
        <h1>Lorem ipsum dolor sit <?php echo $i; ?></h1>
        <h2>por Leandro Marchon</h2>
    </header>
    <!-- div article-text -->
    <div class="article-text">
        <figure>
            <img src="paisagem.jpg" alt="Árvores ao redor de um lago no outono" title="Paisagem">
            <figcaption>Árvores ao redor de um lago no Outono</figcaption>
        </figure>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, numquam rem debitis 
            eos consequuntur ex. Aliquam, incidunt a quidem officiis vitae, nulla quo aliquid 
            deleniti rem modi ea, pariatur assumenda?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, numquam rem debitis 
            eos consequuntur ex. Aliquam, incidunt a quidem officiis vitae, nulla quo aliquid 
            deleniti rem modi ea, pariatur assumenda?
        </p>
    </div>
    <!-- div article-comments -->
    <div class="article-comments">
        <input type="button" class="show-comments" value="Comentar/Exibir comentários">
        <form>
            <fieldset>
                <legend>Deixe o seu comentário</legend>
                <input type="text" placeholder="Nome">
                <input type="email" placeholder="Email">
                <textarea placeholder="Seu comentário"></textarea>
                <input type="submit" value="Enviar">
            </fieldset>
        </form>
        <article>
            <small>Leandro Marchon</small>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsum, aperiam 
                expedita quae incidunt repellendus voluptas, repudiandae quasi doloribus suscipit 
                similique veritatis illum tenetur quo assumenda consequuntur quidem hic magni.
            </p>
        </article>
    </div>
</article>

<?php endfor; ?>