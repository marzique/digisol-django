from django import template
from django.template.defaultfilters import stringfilter


register = template.Library()


@register.filter
@stringfilter
def add_class(html, classes):
    """Add classes string to outer p tag of html"""

    return f'{html[:2]} class="{classes}" {html[2:]}' 
