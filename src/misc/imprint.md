---
title: titles.imprint
layout: page
permalink: /imprint/
description: description.imprint
languages: ["en"]
---

# Imprint/Impressum

*English version below*

**Angaben gemäß § 5 TMG:**  
{{ site.data.imprint.name }}  
{{ site.data.imprint.street }}  
{{ site.data.imprint.city }}  

Direkte Kontaktaufnahme via [<i class="fas fa-envelope"></i> E-Mail](mailto:{{ site.email.address | encode_email }}) möglich.  
[<i class="fas fa-key"></i> GPG-Key]({{ site.email.gpg.path  | prepend: site.baseurl_root }})  
Fingerprint: {{ site.email.gpg.fprint }}

Weiterführende Information bezüglich des Datenschutzes können Sie aus der {% for p in site.data.navigation.legal %}{% if p.title == "titles.menu_privacy" %}[Datenschutzerklärung]({{ p.url | relative_url }}){% endif %}{% endfor %} entnehmen.

---

*This webpage is operated by:*  
{{ site.data.imprint.name }}  
{{ site.data.imprint.street }}  
{{ site.data.imprint.city }}  

Contact via [<i class="fas fa-envelope"></i> Mail](mailto:{{ site.email.address | encode_email }})  
[<i class="fas fa-key"></i> GPG-Key]({{ site.email.gpg.path  | prepend: site.baseurl_root }})  
Fingerprint: {{ site.email.gpg.fprint }}

For more information regarding the privacy, please refer to the {% for p in site.data.navigation.legal %}{% if p.title == "titles.menu_privacy" %}[{% t p.title %}]({{ p.url | relative_url }}){% endif %}{% endfor %}.
