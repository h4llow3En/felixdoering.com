# Impressum

*Angaben gemäß § 5 TMG:*  
{{ site.data.imprint.name }}  
{{ site.data.imprint.street }}  
{{ site.data.imprint.city }}  

Direkte Kontaktaufnahme via [<i class="fas fa-envelope"></i> E-Mail](mailto:{{ site.email.address | encode_email }}) möglich.  
[<i class="fas fa-key"></i> GPG-Key]({{ site.email.gpg.path  | prepend: site.baseurl_root }})  
Fingerprint: {{site.email.gpg.fprint }}

Weiterführende Information bezüglich des Datenschutzes können Sie aus der {% for p in site.pages %}{% if p.title == "titles.privacy" %}[{% t p.title %}]({{ p.url | prepend: site.baseurl }}){% endif %}{% endfor %} entnehmen.
