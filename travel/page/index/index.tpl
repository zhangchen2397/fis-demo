{%extends file="common/page/layout/layout.tpl"%}

{%block name="main"%}

<h1>index page</h1>

{%widget name="travel:widget/comment/comment.tpl"%}

{%widget name="travel:widget/news/news.tpl"%}

{%widget name="travel:widget/icon/icon.tpl"%}

<p>
    <button id="call-commod-btn">调用common模块</button>
    <button id="call-curmod-btn">调用当前模块</button>
</p>

{%script%}
    require( './index.js' );

    /**
    require.async( [
        'common:static/mod/slide/slide.js'
    ], function( slide ) {
        slide.init();
    } );
    */
{%/script%}

{%/block%}
