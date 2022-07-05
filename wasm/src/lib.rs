use ast_formula::calc;
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn calculate(input: &str) -> Result<i32, JsValue> {
    let result = calc(input);
    match result {
        Ok(res) => Ok(res),
        Err(_) => Err(JsValue::from("Syntax Error")),
    }
}
