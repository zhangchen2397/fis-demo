{%extends file="common/page/layout/layout.tpl"%}

{%block name="main"%}

<h1>list page</h1>

{%widget name="travel:widget/news/news.tpl"%}

<p><button id="ajax-btn">模拟接口调用</button></p>

{%script%}
    require( './list.js' );
{%/script%}

{%/block%}
