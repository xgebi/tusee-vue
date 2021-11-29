use std::error::Error;
use actix_web::{get, web::{self, Data, ServiceConfig}, HttpRequest, HttpResponse, Responder};
use serde::Serialize;

#[derive(Debug, Serialize)]
struct IsRegistrationEnabled {
    is_enabled: bool,
}

#[get("/api/registration-enabled")]
pub(crate) async fn is_registration_enabled() -> HttpResponse {
    let res = HttpResponse::Ok()
        .json(IsRegistrationEnabled {
            is_enabled: true,
        });
    res
}