---
layout: default
title: Naymul Islam
---
<div class="prose rise parts">

<p>I work on whether language models stay safe when the words change. Safety training is done
almost entirely in English, and it does not always survive a change of language, register or
framing. I build the benchmarks that measure that, and the systems that run them.</p>

<p>Our <a href="{{ '/publications/' | relative_url }}">EMNLP 2026 Findings paper</a> is the first
case. We held a harmful request fixed and changed only how it was written: 879 requests, five
phrasings each, 18 models, 15,822 judged responses. Written as newspaper prose rather than as a
casual message, the same request is answered <b>17.5 points more often</b>, in 17 of the 18 models.
The test language is Bengali. The failure is not about Bengali.</p>

<p>The other half of what I do is engineering. I am a founding member and lead engineer at
<a href="https://perspectivity.co">Perspectivity</a>, an AI-native narrative intelligence platform.
I built the ingestion and event-clustering pipeline that puts fifty or more outlets' coverage of
the same story side by side, the orchestration around it and the Kubernetes deployment, and I run
the production cluster. It is live on the web, with iOS and Android in beta.</p>

<p>Before that: an agentic browser at Fellou AI, an autonomous coding agent at
<a href="{{ '/experience/' | relative_url }}">Menlo Park Lab</a>, and the data and deployment
layers at AIMarketCap. I write open source too.
<a href="https://github.com/ai-naymul/BrowserPilot">BrowserPilot</a> lets a language model drive a
web browser, and I have merged work into
<a href="https://github.com/kubeflow-kale/kale">Kubeflow Kale</a>,
<a href="https://github.com/jina-ai">Jina AI</a>,
<a href="https://github.com/browser-use/browser-use">browser-use</a> and the
<a href="https://github.com/cncf/glossary">CNCF Cloud Native Glossary</a>.</p>

<p>None of the research is mine alone. I work with
<a href="https://github.com/brishtiteveja">Abdullah Khan Zehady</a>,
<a href="https://roydipta.com/">Shubhashis Roy Dipta</a>,
<a href="https://karmake2.github.io/">Santu Karmaker</a> and
<a href="https://github.com/NusRAT-LiA">Nusrat Jahan Lia</a> at BanglaLLM.</p>

</div>

<dl class="tiles rise parts">
  <div><dt>3</dt><dd>peer-reviewed papers, one as first author</dd></div>
  <div><dt>15,822</dt><dd>model responses judged in our safety benchmark</dd></div>
  <div><dt>1B to 13B</dt><dd>parameter models released open for Bangla</dd></div>
  <div class="tiles--hot"><dt>50k+</dt><dd>followers on the platform I engineer</dd></div>
</dl>
