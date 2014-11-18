{%extends file="common/page/layout/layout.tpl"%}

{%block name="main"%}

<h1>list page</h1>

{%widget name="travel:widget/news/news.tpl"%}

{%script%}
    require( './list.js' );
{%/script%}

{%/block%}
