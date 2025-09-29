package handler

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

// Response structure for the Go serverless function
type Response struct {
	Message           string            `json:"message"`
	Builder           string            `json:"builder"`
	Runtime           string            `json:"runtime"`
	Method            string            `json:"method"`
	Timestamp         string            `json:"timestamp"`
	ServerTime        time.Time         `json:"serverTime"`
	Headers           map[string]string `json:"headers"`
	UploadBasedBuilder bool             `json:"uploadBasedBuilder"`
}

// Handler function for the Go serverless function
// Built using @vercel/go builder
func Handler(w http.ResponseWriter, r *http.Request) {
	// Set CORS headers
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Content-Type", "application/json")

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	// Collect some headers for the response
	headers := make(map[string]string)
	for name, values := range r.Header {
		if len(values) > 0 {
			headers[name] = values[0]
		}
	}

	response := Response{
		Message:           "Hello from Go serverless function!",
		Builder:           "@vercel/go",
		Runtime:           "go1.x",
		Method:            r.Method,
		Timestamp:         time.Now().Format(time.RFC3339),
		ServerTime:        time.Now(),
		Headers:           headers,
		UploadBasedBuilder: true,
	}

	w.WriteHeader(http.StatusOK)
	
	encoder := json.NewEncoder(w)
	encoder.SetIndent("", "  ")
	if err := encoder.Encode(response); err != nil {
		http.Error(w, fmt.Sprintf("Error encoding response: %v", err), http.StatusInternalServerError)
	}
}