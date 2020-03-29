---
title: Managing the Rust Learning Curve
date: 2020-03-22
author: Sean Bailey
tags:
  - rust
  - software-development
  - education
---

- Speaking as someone that recently overcame the learning curve of Rust, it's
  not as big as it looks, but no one can deny its existence.
- Keep your eyes on the beauty of Rust, and what makes this learning process
  worth your time and effort.
  - Incredible performance.
  - A fantastic tooling ecosystem.
    - <https://rustup.rs> -> toolchain installer
    - `rustc` An excellent compiler that gives you real, actionable error messages.
    - Cargo a package manager, a build tool, a documentation builder, and test runner.
    - If you keep looking, you'll also find a task runner (`cargo-make`), a code
      formatter (`rustfmt`), and a static code analysis tool (`clippy`).
  - Some fantastic design decisions.
    - Powerful enums and pattern matching
    - No sneaky null reference exceptions.
- Be prepared to change some habits
  - You may be doing some silly things in your previous languages that just
    won't fly with Rust.
  - You may need to work a little harder, taking care of edge cases that you
    previously overlooked.
- Rust docs can be a little confusing to navigate and understand at first. It's
  vital that you try to understand how modules and crates are organised and
  exported/imported. Understanding this will help you figure out how to use
  docs—vital to the success of any Rustacean.
- Remember to return to the [Rust Programming Language][1]. This book was
  written by the members of the Rust core team.

[1]: https://doc.rust-lang.org/stable/book/
