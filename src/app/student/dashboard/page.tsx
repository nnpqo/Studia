"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CourseCard } from "@/components/course-card"
import type { Course } from "@/lib/mock-data"
import { mockCourses } from "@/lib/mock-data"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function StudentDashboard() {
  const courses: Course[] = mockCourses.slice(0, 2);

  return (
    <div className="p-4 md:p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-headline font-bold">Mi Panel</h1>
        <p className="text-muted-foreground mt-2">¡Bienvenido/a de nuevo! ¿Listo/a para aprender algo nuevo?</p>
      </div>

      <Card className="mb-8 animate-fade-in">
        <CardHeader>
          <CardTitle className="font-headline">Unirse a un Nuevo Curso</CardTitle>
          <CardDescription>Ingresa el código de tu profesor para inscribirte en un nuevo curso.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col sm:flex-row gap-4">
            <Input placeholder="Ingresar código de curso" className="max-w-xs" />
            <Button type="submit">Unirse al Curso</Button>
          </form>
        </CardContent>
      </Card>

      <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-3xl font-headline font-bold mb-6">Mis Cursos Inscritos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} userRole="student" />
          ))}
        </div>
      </div>
    </div>
  )
}
