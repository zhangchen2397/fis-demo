{%extends file="common/page/layout/layout.tpl"%}

{%block name="main"%}

<h1>index page</h1>

{%widget name="travel:widget/comment/comment.tpl"%}

{%widget name="travel:widget/news/news.tpl"%}

<p><button id="call-commod-btn">调用common模块</button></p>

{%script%}
    require( './index.js' );
{%/script%}

{%/block%}
