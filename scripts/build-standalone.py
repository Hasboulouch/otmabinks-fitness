from pathlib import Path
import base64
root=Path(__file__).resolve().parent.parent
p=(root/'index.html').read_text()
p=p.replace('<link rel="stylesheet" href="style.css">','<style>'+(root/'style.css').read_text()+'</style>')
for name in ['program','guides','app']:
 p=p.replace(f'<script src="{name}.js" defer></script>','')
p=p.replace('src="assets/training.jpg"','src="data:image/jpeg;base64,'+base64.b64encode((root/'assets/training.jpg').read_bytes()).decode()+'"')
p=p.replace('</body>','<script>'+'\n'.join((root/(name+'.js')).read_text() for name in ['program','guides','app'])+'</script></body>')
(root/'otmabinks_fitness_pro.html').write_text(p)
