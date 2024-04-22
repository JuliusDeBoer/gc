package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	
	"gorm.io/gorm"
	"gorm.io/driver/postgres"
)

var db *gorm.DB

type Product struct {
  gorm.Model
  Code  string
  Price uint
}

func setupDb() {
	dsn := "host=y.db user=postgres password=password dbname=y port=5432 sslmode=disable"
	tmpDb, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	db = tmpDb

  if err != nil {
    panic("failed to connect database")
  }
}

func main() {
	e := echo.New()

	setupDb()

	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, db.Config.Name())
	})
	e.Logger.Fatal(e.Start(":1323"))
}
