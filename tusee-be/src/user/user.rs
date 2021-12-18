use std::error::Error;
use actix_web::{get, post, web::{self, Data, ServiceConfig}, HttpRequest, HttpResponse, Responder};
use serde::Serialize;
use crate::utilities::utilities::create_database_connection;

#[derive(Debug, Serialize)]
struct IsRegistrationEnabled {
    is_enabled: bool,
}

#[derive(Debug, Serialize)]
struct UserDetails {
    username: String,
    password: String
}

#[derive(Debug, serialize)]
struct LoginResult {
    token: String,
    error: bool,
    error_message: String
}

#[get("/api/registration-enabled")]
pub(crate) async fn is_registration_enabled() -> HttpResponse {
    let res = HttpResponse::Ok()
        .json(IsRegistrationEnabled {
            is_enabled: true,
        });
    res
}

#[post("/api/login")]
pub(crate) async fn log_user_in() -> HttpResponse {
    let conn = create_database_connection();

    let res = HttpResponse::Ok()
        .json(IsRegistrationEnabled {
            is_enabled: true,
        });
    res
}