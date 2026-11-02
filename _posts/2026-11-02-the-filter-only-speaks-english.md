---
layout: post
title: "the filter only speaks english"
date: 2026-11-02
description: "why safety has to live in the weights rather than in a classifier sitting in front of them."
---

a note on where safety has to live. in the weights, not in a layer standing in front of them.

## what a filter is

most deployed systems are two things. a model that can write anything. and a classifier in front of
it that reads the request, sometimes the answer too, and decides whether to let it through.

the classifier is trained on examples of bad requests. that is the whole problem, and everything
below follows from it.

## the thing that settled it for me

we asked eighteen models the same harmful request written five different ways. one way was plain
english. another was the same request in formal bengali, the register of newspaper prose.

gemma-4-26b answers 18.5 per cent of them in english. in bengali it answers 90.8 per cent.

same model, same request, seventy-two points apart. the model did not get more capable in the
second case. it got past something, and whatever that something was it had not read the request. it
had read the shape of the request.

it holds across the table. the mean swing is 17.5 points and seventeen of the eighteen models move
the same way. it is not really about bengali, because the gap turns up between two registers of
bengali. it is not one grader being odd, because a judge from another vendor gives the same
ranking. and it is not only small or careless models, because the safest model in our set still
moves from 0.6 per cent to 37.9 per cent when the clothes change.

the [numbers](https://banglallm.github.io/banglasafe/leaderboard.html) are all public and i am not
going to relitigate them here. one thing from them is worth saying out loud though. the least safe
model we measured is one built and served in europe, a continent that runs on a lot of languages
and only one of them is english.

## why a filter cannot win this

a classifier has to be right every time. whoever is probing it needs one phrasing.

and the phrasings are not a finite set you can work through. language, register, framing,
transliteration, code mixing, indirection, politeness. they multiply against each other. we moved
one of them and a seventy-two point hole opened, and we were not even hunting for the clever ones.
we picked the five ways a normal person writes.

a classifier is fitted to a distribution of attempts, which means everything outside that
distribution passes by construction. you cannot enumerate your way out, because the thing you are
enumerating is produced by people who watch what your filter does and move somewhere else.

the two sides also scale differently, and this is the part i find hardest to argue around.
capability comes from compute. filter coverage comes from somebody sitting down and writing
examples of things that should be refused. one of those has a scaling law behind it. the other has
a headcount. the distance between what a model can do and what its filter has seen gets wider every
generation, for free, without anybody deciding it should.

## alignment did not come free with scale

satya nadella said something in a recent [interview](https://youtu.be/24XUcWhqY_4) that i keep
returning to. he said he had assumed alignment would follow from scale the way capability did, and
that it has not turned out that way. he argued consistency has to be built in from the start rather
than fitted at the end.

that is the whole thing in one sentence. the scaling bet paid out on capability. it did not pay out
on alignment as a side effect. so alignment is something you spend training on deliberately or you
do not get it, and a classifier is what it looks like when a company would rather not spend it.

## open weights make it structural

a filter is a separate component. open weights ship without it.

whoever runs the model locally runs it with nothing in front. every number in our table is the model
with its guard off, which is the only way an open model is ever actually used.

and weights can be trained further. a few hundred examples of the behaviour you want moves a model a
long way, so safety in the weights is not a guarantee either. someone with the weights and a gpu can
push it back out.

but there is a real difference between deleting a file and retraining a model, and plenty of open
releases today do not even make you do the second one. nadella's version of this is that an
unconstrained open release is a problem for everyone, including whoever shipped it. i think that is
right and i do not think it is an argument for closing everything. it is an argument for putting
the safety somewhere it travels with the weights.

## what training it in means

a refusal that comes from the model's own understanding of what is being asked should not care what
clothes the question wore, because by the time the model has understood it, it has mapped it to the
same place whatever the language.

that is the claim worth testing and i cannot prove the mechanism from behaviour alone. what our data
says is weaker and still useful. the models that barely move when you change the register are the
ones with the most post-training behind them. the ones that swing thirty points are not. whatever
the first group is doing, it is not a wrapper.

## what i would do

keep the filter. it catches the lazy attempts and it costs almost nothing.

stop reporting it as the safety property. report the model with the filter off, because that is what
an open release is and what a jailbroken deployment is.

test in the languages you ship in, and inside each language test the registers. one phrasing per
language tells you close to nothing.

and build the harm taxonomy from the law of the place the language belongs to. ours comes from
bangladeshi statute. a north american content policy would have missed several of the categories
outright.

the work this comes from is [here](https://aclanthology.org/2026.findings-emnlp.1403/), with the
data [here](https://huggingface.co/datasets/BanglaLLM/banglasafe).
