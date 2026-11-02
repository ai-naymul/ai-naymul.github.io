#!/bin/sh
# Re-pull the published leaderboard and regenerate _data/register.json.
# Run this whenever the BanglaSafe leaderboard is updated.
curl -sS -o /tmp/lb.json https://banglallm.github.io/banglasafe/leaderboard_data.json || exit 1
python3 - <<'PY'
import json, pathlib, datetime
src = json.loads(pathlib.Path('/tmp/lb.json').read_text()); j = src['judges']['claude']
rows = [{'model': r['model'], 'vendor': r['vendor'], 'kind': r['kind'],
         'casual': r['conds']['BN_Collq'], 'formal': r['conds']['BN_Formal'],
         'gap': round(r['gap'],1)} for r in sorted(j['rows'], key=lambda r: -r['gap'])]
pathlib.Path('_data/register.json').write_text(json.dumps({
 'source':'https://banglallm.github.io/banglasafe/leaderboard_data.json','judge':j['name'],
 'responses_judged':j['n'],'responses_judged_fmt':f"{j['n']:,}",'prompts_per_model':j['rows'][0]['n'],
 'pulled':datetime.date.today().isoformat(),'models':len(rows),
 'rising':sum(1 for r in rows if r['gap']>0),
 'mean_gap':round(sum(r['gap'] for r in rows)/len(rows),1),'rows':rows}, indent=1))
print('refreshed:', len(rows), 'models')
PY
