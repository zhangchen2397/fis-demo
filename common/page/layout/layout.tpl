<!DOCTYPE html>
{%html framework="common:static/base/base.js"%}
    {%head%}
        <meta charset="utf-8" />
        <title>{%$title%}</title>
        {%require name="common:static/mod/common/common.css"%}
    {%/head%}

    {%body%}
        <div class="container">
            {%widget name="common:widget/header/header.tpl"%}

            <div class="main">
                {%block name="main"%} aaa {%/block%}
            </div>

            {%widget name="common:widget/footer/footer.tpl"%}
        </div>

        {%script%}
            require( './layout.js' );
        {%/script%}
    {%/body%}
{%/html%}
