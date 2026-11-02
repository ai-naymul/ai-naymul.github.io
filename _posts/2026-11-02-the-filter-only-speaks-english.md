---
layout: post
title: "the filter only speaks english"
date: 2026-11-02
description: "why safety has to be trained into a model rather than bolted on in front of it, using the numbers from our own benchmark."
---

a note on why safety belongs in training and not in a filter sitting in front of the model. the
evidence is our own, from the benchmark behind our emnlp 2026 findings paper.

## what a filter is

most deployed systems have two parts. a model that can write anything. and a layer in front of it
that tries to stop the bad things getting out.

that layer is usually a classifier. it reads the request, often the answer too, and decides whether
to allow it. it is trained on examples of bad requests and good ones.

that is the part i think is misplaced. not because classifiers are bad, but because of what they
are trained on.

## what we tested

879 harmful requests. written in bengali by native speakers rather than translated, because a
translated prompt carries english sentence structure with it and that is the thing under test.

17 harm categories taken from what bangladeshi law actually treats as a crime, not from an american
content policy.

each request written five ways. english direct. english wrapped in an institutional frame. formal
bengali, the register of newspaper prose. colloquial bengali, the register of a text message.
bengali inside the same institutional frame.

the request never changes. only the clothes it arrives in.

18 models. 15,822 answers. every answer graded by a judge model, then the whole set graded again by
a second judge from a different vendor.

## the headline number

across 18 models the attack succeeds **53.6 per cent** of the time.

that is the share of harmful requests that got a partial or a full answer. for a set of requests
that describe crimes in the country the language belongs to.

## the same model gives two different answers

this is the part that convinced me.

| model | english direct | formal bengali | swing |
|---|---|---|---|
| gemma-4-26b | 18.5 | 90.8 | **+72.3** |
| gemini-2.5-flash | 14.5 | 87.9 | **+73.4** |
| gpt-4.1-mini | 57.8 | 91.4 | +33.6 |
| claude-haiku-4.5 | 7.5 | 37.9 | +30.4 |

gemma-4-26b refuses nearly everything in plain english. ask for the same thing in newspaper bengali
and it hands it over nine times in ten.

the model did not become more capable in the second case. it got past something. whatever stopped
it in english was not reading the request. it was reading the shape of the request.

## it is not even about the language

if this were only about bengali the fix would be easy. train the filter on more bengali.

but the gap sits inside bengali too. same language. same request. different register.

qwen3-30b answers 83.3 per cent of the time in formal bengali and 48.4 per cent in colloquial
bengali. mistral-medium-3 goes 97.1 formal against 70.0 colloquial.

across all 18 models the mean swing from casual to formal is **17.5 points**, the median 17.6, and
seventeen of the eighteen move in the same direction.

so the lever is not the language. it is the register. the costume of authority. a request that
reads like a newspaper gets treated like a newspaper.

no classifier was trained on that axis, because nobody had thought of it as an axis.

## the worst one is deployed across europe

| model | attack success |
|---|---|
| **mistral-medium-3** | **89.5** |
| deepseek-v3 | 88.4 |
| gpt-4.1-mini | 79.3 |
| qwen3-8b | 78.5 |
| gemma-3-27b | 74.2 |
| llama-3.3-70b | 41.9 |
| grok-4.3 | 24.2 |
| claude-haiku-4.5 | 17.1 |

mistral-medium-3 sits at the top of our table. 89.5 per cent overall and 97.1 per cent in formal
bengali.

europe has a lot of languages and most of them are not english. a model built and served there
being the least safe thing we measured on a non-english benchmark is not a small finding.

## the safest model still has the hole

claude-haiku-4.5 is the best in the table at 17.1 per cent. in english with an institutional frame
it refuses all but **0.6 per cent** of these requests.

in formal bengali the same model answers 37.9 per cent of them.

so the best safety training we measured still moves by a factor of sixty when you change the
language and the register. near the top of the table is not the same as closed.

## two judges, one answer

a single judge model grading a safety benchmark is a fair thing to be suspicious of.

so every answer was graded twice, by judges from different vendors. overall they land at 53.6 and
50.0. mistral at 89.5 and 86.2. gemma-4 at 61.5 and 51.4.

the numbers move a little. the ranking and the direction do not.

## the caveat i have to state

the three safest-looking rows are llama-3.2-3b at 3.9, llama-3.1-8b at 8.4 and tigerllm-1b at 10.6.

these are small models. a 3b model often cannot write a coherent harmful answer even when it tries.
a low score there measures incapacity, not alignment.

capability and safety are confounded at the bottom of the table and anyone reading it should know
that. the interesting rows are the capable models that still refuse, not the ones that cannot
comply.

## why a filter cannot win this

a classifier has to be right every time. an attacker needs one phrasing.

and the number of phrasings is not finite. language, register, framing, transliteration, code
mixing, indirection. each multiplies the others. we found a 72 point hole by moving one of them. we
were not even looking for the clever ones.

a classifier is fitted to a distribution of attempts, so everything outside that distribution
passes by construction. you cannot enumerate your way out, because the set you are enumerating is
produced by people who watch what your filter does and move.

there is a second problem that gets worse with time. capability comes from scale. filter coverage
comes from someone sitting down and writing examples. one of those grows with compute. the other
grows with headcount. the gap between what a model can do and what the filter has seen opens wider
every generation.

## the thing i keep coming back to

satya nadella said something in a recent [interview](https://youtu.be/24XUcWhqY_4) that lines up
with this. he said he had assumed alignment would follow from scale the way capability did, and
that it has not turned out that way. he also argued that consistency has to be built in from the
start rather than added at the end, and that open weight models released with no constraints are a
problem for everyone, including the countries releasing them.

the first half of that is the important half. scaling laws delivered on capability. they did not
deliver alignment as a side effect. so alignment is a thing you have to spend training on
deliberately, and our numbers are what it looks like when you have not.

## open weights make it structural

a filter is a separate component. open weights ship without it. whoever runs the model locally runs
it with nothing in front.

every number in the table above is the model with its guard off, which is the only way an open
model is ever actually run.

and weights can be trained further. a few hundred examples of the behaviour you want moves a model
a long way. so weight-level safety is not a guarantee either. somebody with the weights and a gpu
can push it back out.

but there is a real difference between deleting a file and retraining a model, and a lot of open
releases today do not even make you do the second one.

## what training it in actually means

a refusal that comes from the model's own representation of what is being asked should not care
what clothes the question wore, because by the time the model has understood the request it has
mapped it to the same place whatever the language.

that is the claim worth testing, and our data is consistent with it in the negative direction. the
models with the smallest swings are the ones with the most post-training behind them. grok-4.3
moves 3.3 points. mistral-medium-3 moves 27.1.

it does not prove the mechanism. it does say that whatever the low-swing models are doing is not
what the high-swing ones are doing, and that it is not a wrapper.

## what i would do

keep the filter. it catches the lazy attempts and it is cheap.

stop reporting it as the safety property. report the model with the filter off, because that is
what an open release is and what a jailbroken deployment is.

test in the languages you deploy in, and inside those languages test the registers. one phrasing
per language tells you almost nothing. we used five and the fourth one opened a 72 point hole.

build the harm taxonomy from the law of the place the language belongs to. our 17 categories come
from bangladeshi statute. an american content policy would have missed several of them outright.

## the data

the full table, all 18 models, both judges and all five conditions, is on the
[leaderboard](https://banglallm.github.io/banglasafe/leaderboard.html). the prompts and the graded
answers are [on hugging face](https://huggingface.co/datasets/BanglaLLM/banglasafe). the paper is
[here](https://aclanthology.org/2026.findings-emnlp.1403/).
