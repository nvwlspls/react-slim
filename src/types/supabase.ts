export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      bands: {
        Row: {
          created_at: string | null
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string | null
        }
      }
      perforamnces: {
        Row: {
          band: number | null
          created_at: string | null
          id: number
          show: number | null
        }
        Insert: {
          band?: number | null
          created_at?: string | null
          id?: number
          show?: number | null
        }
        Update: {
          band?: number | null
          created_at?: string | null
          id?: number
          show?: number | null
        }
      }
      shows: {
        Row: {
          created_at: string | null
          date: string | null
          descreiption: string | null
          id: number
          title: string | null
        }
        Insert: {
          created_at?: string | null
          date?: string | null
          descreiption?: string | null
          id?: number
          title?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string | null
          descreiption?: string | null
          id?: number
          title?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
