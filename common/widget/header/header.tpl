<div class="header">
    <div class="menu">
        <ul>
            {%foreach $menu as $item%} 
                <li><a href="{%$item.href%}">{%$item.name%}</a></li>
            {%/foreach%}
        </ul>
    </div>
</div>

{%script%}
    require('./header.js');
{%/script%}
