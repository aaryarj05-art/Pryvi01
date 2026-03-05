from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Pryvi API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "Hello Pryvi"}



from pydantic import BaseModel

class CalculateRiskRequest(BaseModel):
    age: int
    bloodPressure: int
    diabetes: str
    cholesterol: int

@app.post("/calculate-risk")
def calculate_risk(data: CalculateRiskRequest):
    return {"risk": 0}
